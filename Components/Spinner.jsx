'use client';
import React from 'react';

export default function WarningSpinner() {
    return (
        <div className="min-h-screen overflow-y-hidden overflow-x-hidden flex items-center justify-center bg-white">
            <div className="relative flex justify-center items-center">
                <div className="w-16 h-16 border-[6px] border-orange-400 border-t-transparent rounded-full animate-[spin_0.5s_linear_infinite] shadow-lg shadow-orange-300" />
            </div>
        </div>
    );
}
