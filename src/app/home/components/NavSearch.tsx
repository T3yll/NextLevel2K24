// components/AdminNavbarMenu.tsx
'use client';// Ajoutez cette ligne pour marquer le composant comme un Client Component
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Remplacer useRouter par useNavigation pour les composants clients

export default function NavSearch() {

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const navigation = useRouter(); // Remplacer useRouter par useNavigation

    useEffect(() => {
        const handleClickOutside = (event:MouseEvent) => {
            if (ref.current && !ref.current.contains((event.target as Node))) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [ref]);

    // const handleAccountManagementClick = () => {
    //     // Rediriger en fonction du rôle
    //     if (isAdmin) {
    //         navigation.push('/admin');
    //     } else {
    //         navigation.push('/settings');
    //     }
    // };

    return (
        <div className='flex pl-5 w-[550px] h-[80px] text-xs rounded-[50px] bg-[#000000] bg-opacity-[20%] mt-4 mb-4 justify-center items-center gap-2'>
            <a className='flex flex-row gap-2 items-center'>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.875 15.0938V15.9749C7.87504 16.3197 7.80714 16.6612 7.67517 16.9798C7.5432 17.2984 7.34975 17.5878 7.10588 17.8316L6.5625 18.375H14.4375L13.8941 17.8316C13.6502 17.5878 13.4568 17.2984 13.3248 16.9798C13.1929 16.6612 13.125 16.3197 13.125 15.9749V15.0938M18.375 4.59375V13.125C18.375 13.6471 18.1676 14.1479 17.7984 14.5171C17.4292 14.8863 16.9284 15.0937 16.4062 15.0938H4.59375C4.07161 15.0937 3.57085 14.8863 3.20163 14.5171C2.83242 14.1479 2.625 13.6471 2.625 13.125V4.59375M18.375 4.59375C18.375 4.07161 18.1676 3.57085 17.7984 3.20163C17.4292 2.83242 16.9284 2.625 16.4062 2.625H4.59375C4.07161 2.625 3.57085 2.83242 3.20163 3.20163C2.83242 3.57085 2.625 4.07161 2.625 4.59375M18.375 4.59375V10.5C18.375 11.0221 18.1676 11.5229 17.7984 11.8921C17.4292 12.2613 16.9284 12.4688 16.4062 12.4688H4.59375C4.07161 12.4688 3.57085 12.2613 3.20163 11.8921C2.83242 11.5229 2.625 11.0221 2.625 10.5V4.59375" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                PC

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 6.875L10 13.125L3.75 6.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                </a>
            <a className='flex flex-row gap-2 items-center'>
                <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.46162 14.1632C3.97122 14.3583 4.89242 14.3029 5.51962 14.0398L7.21922 13.3184V15.4064L6.88112 15.4715C5.18082 15.796 3.36782 15.6607 1.58422 14.9733C-0.0796814 14.4263 -0.357581 13.2866 0.401219 12.6288C1.10332 12.0212 2.29472 11.5652 2.29472 11.5652L7.21922 9.51926V11.8505L3.67512 13.3347C3.04792 13.597 2.95342 13.9696 3.46162 14.1632ZM20.8111 13.7463C20.3953 14.2179 19.3796 14.5542 19.3796 14.5542L11.8126 17V15.1973L17.3804 13.4108C18.0125 13.2075 18.1098 12.9193 17.5967 12.7685C17.0836 12.6177 16.1554 12.6606 15.5233 12.8638L11.8126 14.0405V12.1698L12.0254 12.1047C12.0254 12.1047 13.0992 11.7625 14.6049 11.611C16.1127 11.4639 17.9593 11.6317 19.4083 12.1269C21.0421 12.5911 21.2255 13.2763 20.8111 13.7463ZM12.6225 9.47344V4.16057C12.6225 3.53822 12.514 2.96539 11.9596 2.80204C11.5347 2.6557 11.2729 3.07404 11.2729 3.69639V17L7.87512 15.861V0C9.32062 0.283087 11.4241 0.952 12.556 1.35335C15.4316 2.39774 16.4067 3.69639 16.4067 6.62113C16.4067 9.4727 14.7407 10.554 12.6232 9.47344H12.6225Z" fill="white"/>
                </svg>

                Playsation
                
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 6.875L10 13.125L3.75 6.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                </a>
            <a className='flex flex-row gap-2 items-center'>
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_49_35)">
                    <path d="M3.5896 16.651C5.4348 18.114 7.8547 19 10.5 19C13.0438 19.0034 15.5019 18.1683 17.4146 16.651C19.0568 15.1373 13.6381 9.7565 10.5 7.61267C7.3661 9.7565 1.9432 15.1373 3.5896 16.651ZM13.3546 5.2459C15.5421 7.58987 19.9031 13.4102 18.6711 15.4679C20.1271 13.8383 21 11.7648 21 9.50317C21 6.859 19.8058 4.46627 17.8766 2.7455C17.8766 2.7455 17.8528 2.7284 17.8045 2.71193C17.7255 2.68732 17.6424 2.67532 17.5588 2.67647C17.0408 2.67647 15.8221 3.01973 13.3546 5.2459ZM3.1976 2.71257C3.1479 2.7284 3.1255 2.74487 3.1227 2.74613C1.1942 4.4669 0 6.859 0 9.50317C0 11.7629 0.8736 13.8358 2.3282 15.4666C1.1025 13.4045 5.46 7.5886 7.6482 5.2459C5.1807 3.0191 3.9592 2.6771 3.4426 2.6771C3.3278 2.6771 3.2473 2.69357 3.1969 2.71383V2.71193L3.1976 2.71257ZM10.5 2.81137C10.5 2.81137 7.9233 1.44717 5.9108 1.38257C5.1205 1.3566 4.6389 1.61627 4.5801 1.6511C6.4568 0.511733 8.4518 0 10.486 0H10.5C12.5426 0 14.5292 0.511733 16.4206 1.65047C16.3611 1.61373 15.8823 1.35597 15.0906 1.38193C13.0781 1.44717 10.5 2.8063 10.5 2.8063V2.81137Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_49_35">
                    <rect width="21" height="19" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

                Xbox
                
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 6.875L10 13.125L3.75 6.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                </a>
            <a className='flex flex-row gap-2 items-center'>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_49_37)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.527 9.43951C15.3809 9.41286 14.4674 10.4023 14.452 11.5145C14.4367 12.6703 15.3526 13.5975 16.3792 13.6565C17.6117 13.7276 18.5551 12.6905 18.5559 11.5775C18.5567 10.3982 17.6812 9.46051 16.527 9.43951ZM12.4683 10.4806V0.300476C12.4683 0.00970715 12.4724 0.00566869 12.7632 0.00566869L15.8372 0.00809177C18.337 0.0500918 20.4273 1.88194 20.8845 4.34378C20.9566 4.73709 20.9931 5.13608 20.9935 5.53594L20.9984 15.5578C20.9976 17.8549 19.6423 19.8725 17.5625 20.6648C16.9842 20.8853 16.3816 20.9903 15.7662 20.9952L12.8068 20.9968C12.4683 20.9968 12.4683 20.9968 12.4683 20.6398V10.479V10.4806ZM8.18031 19.2861V1.70021H7.95819C7.10123 1.70021 6.24427 1.69375 5.38731 1.70344C5.10071 1.70512 4.8148 1.7316 4.53277 1.78259C2.92546 2.08225 1.66869 3.63786 1.66789 5.3219L1.67354 15.7024C1.67839 16.7354 2.09192 17.6109 2.82692 18.3161C3.53285 18.9929 4.38335 19.2909 5.33723 19.295H8.00423C8.05996 19.295 8.1165 19.2877 8.18031 19.2837V19.2861ZM9.84415 10.5024V20.7076C9.84415 20.9734 9.81669 21.0008 9.55904 21.0008L5.35581 20.9992C3.92215 20.9992 2.66781 20.5146 1.62589 19.4969C0.852116 18.7401 0.352155 17.8112 0.135693 16.7322C0.0726932 16.4188 0.0226163 16.0957 0.0218086 15.7767L0.0347317 5.23467C0.0751163 3.0329 1.17115 1.44013 3.09912 0.481399C3.80989 0.128438 4.57315 -0.00160054 5.36065 1.48445e-05H9.5445C9.83285 1.48445e-05 9.84335 0.00970715 9.84335 0.315823V10.5016L9.84415 10.5024ZM3.28246 6.55121C3.25096 5.53351 4.10873 4.59013 5.23869 4.59417C6.34039 4.59821 7.22562 5.42528 7.21835 6.59563C7.21108 7.75871 6.23215 8.5559 5.21608 8.53086C4.12165 8.50421 3.27519 7.65371 3.28246 6.55121Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_49_37">
                    <rect width="21" height="21" fill="white"/>
                    </clipPath>
                </defs>
            </svg>

                Nintendo
                
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 6.875L10 13.125L3.75 6.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                </a>
        </div>
    );
}
