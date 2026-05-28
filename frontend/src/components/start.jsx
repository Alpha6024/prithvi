import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Start() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => navigate('/acc'), 2500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-green-100 px-6">
            <div className="flex flex-col items-center space-y-5">
                <div className="w-24 h-24 bg-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
                    </svg>
                </div>
                <h1 className="text-5xl font-bold text-green-800 tracking-wide">PRITHVI</h1>
                <p className="text-green-600 text-base font-medium">पृथ्वी · Action for the Earth</p>
                <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mt-4" />
            </div>
        </div>
    );
}
