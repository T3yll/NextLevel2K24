
import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dbConnect from '../../../mongodb';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    if (method === 'POST') {
        try {
            const { email, password } = req.body;

            // Vérifiez si l'utilisateur existe
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: "Aucun utilisateur trouvé avec cet email." });
            }

            // Vérifier si le mot de passe est correct
            const isMatch = await bcrypt.compare(password, user.motDePasse);
            if (!isMatch) {
                return res.status(401).json({ message: "Mot de passe incorrect." });
            }

            // Créer un token JWT
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            // Envoyer le token dans un cookie
            res.setHeader('Set-Cookie', `token=${token}; path=/; HttpOnly; SameSite=Strict`);
            res.setHeader('Set-Cookie', [`prenom=${user.prenom}; path=/; HttpOnly; SameSite=Strict`]);

            res.status(200).json({ message: "Connexion réussie", token });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}