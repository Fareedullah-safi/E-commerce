import React from 'react';

const MiniWhiteSpinner = () => {
    return (
        <>
            <style jsx>{`
                @keyframes spinGlow {
                    0% {
                        transform: rotate(0deg) scale(1);
                        box-shadow: 0 0 0px white;
                    }
                    50% {
                        transform: rotate(180deg) scale(1.1);
                        box-shadow: 0 0 8px white;
                    }
                    100% {
                        transform: rotate(360deg) scale(1);
                        box-shadow: 0 0 0px white;
                    }
                }
            `}</style>
            <div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                style={{
                    animation: 'spinGlow 1s linear infinite',
                }}
            />
        </>
    );
};

export default MiniWhiteSpinner;
