'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateUser() {
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const router = useRouter();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prenom,
                nom,
                email,
                motDePasse: password,
                dateNaissance
            }),
        });

        const data = await response.json();
        if (response.ok) {
            alert('Utilisateur créé avec succès!');
            router.push('/login');
        } else {
            alert('Erreur lors de la création de l’utilisateur: ' + data.error);
        }
    }

    return (
        <section className="flex flex-col items-center pt-6">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Créer un compte</h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prénom</label>
                    <input type="text" value={prenom} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setPrenom(e.target.value)} placeholder="Jonh" required />
                    </div>
                    <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                    <input type="text" value={nom} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setNom(e.target.value)} placeholder="Doe" required />
                    </div>
                    <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" value={email} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setEmail(e.target.value)} placeholder="exemple@exemple.com" required />
                    </div>
                    <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de pase</label>
                    <input type="password" value={password} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setPassword(e.target.value)} placeholder="*******" required />
                    </div>
                    <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date de naissance</label>
                    <input type="date" value={dateNaissance} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setDateNaissance(e.target.value)} required />
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Créer un compte</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">Déjà un compte? <a
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/login">Connecte toi ici</a>
                    </p>
                </form>
                </div>
            </div>
        </section>
    );
}
