import dbConnect from '../../../mongodb';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    if (method === 'POST') {
        try {
            const { prenom, nom, email, motDePasse, dateNaissance } = req.body;

            // Vérifiez si l'utilisateur existe déjà
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: "Un utilisateur avec cet email existe déjà." });
            }

            // Hasher le mot de passe
            const salt = await bcrypt.genSalt(10); // 10 rounds
            const hashedPassword = await bcrypt.hash(motDePasse, salt);

            // Créer un nouvel utilisateur avec le mot de passe hashé
            const newUser = await User.create({
                prenom,
                nom,
                email,
                motDePasse: hashedPassword,
                dateNaissance
            });

            res.status(201).json({ message: "Utilisateur créé avec succès", user: newUser });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
