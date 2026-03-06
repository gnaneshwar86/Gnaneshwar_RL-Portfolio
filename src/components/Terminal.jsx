import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalLine = ({ text, delay, onComplete, isCommand }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        if (!isCommand) {
            // Instantly render output
            setDisplayedText(text);
            if (onComplete) onComplete();
            return;
        }

        // Typing effect for commands
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                if (onComplete) setTimeout(onComplete, 400); // Wait a bit after typing before next line
            }
        }, 50);

        return () => clearInterval(interval);
    }, [started, text, isCommand, onComplete]);

    if (!started) return null;

    return (
        <div className={`font-mono text-[0.85rem] mb-1 ${isCommand ? 'text-green-400' : 'text-gray-300'}`}>
            {isCommand && <span className="text-blue-400 mr-2">gnaneshwar@ubuntu:~$</span>}
            {displayedText}
        </div>
    );
};

const InteractiveTerminal = () => {
    const [step, setStep] = useState(0);

    const lines = [
        { type: 'command', text: 'whoami', delay: 500 },
        { type: 'output', text: 'gnaneshwar_rl', delay: 0 },
        { type: 'command', text: 'cat skills.json', delay: 300 },
        { type: 'output', text: '{\n  "role": "Software Development Engineer",\n  "stack": ["Java", "Spring Boot", "React", "AWS"]\n}', delay: 0 },
        { type: 'command', text: './run_backend.sh', delay: 300 },
        { type: 'output', text: '[INFO] Starting Microservices...\n[INFO] Connected to MySQL database.\n[INFO] Application running on port 8080.', delay: 0 },
    ];

    return (
        <motion.div
            className="w-full max-w-[700px] bg-[#111111] rounded-lg overflow-hidden shadow-2xl border border-gray-800 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
        >
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-2 bg-[#222222] border-b border-gray-700">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-gray-400 text-[0.75rem] font-mono">bash - gnaneshwar@ubuntu</div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 min-h-[320px] bg-black text-left whitespace-pre-wrap overflow-hidden">
                {lines.map((line, idx) => (
                    idx <= step && (
                        <TerminalLine
                            key={idx}
                            text={line.text}
                            isCommand={line.type === 'command'}
                            delay={idx === step ? line.delay : 0}
                            onComplete={() => {
                                if (idx === step && step < lines.length - 1) {
                                    setStep(s => s + 1);
                                }
                            }}
                        />
                    )
                ))}
                {/* Blinking Cursor */}
                {step >= lines.length - 1 && (
                    <div className="font-mono text-[0.85rem] mt-1">
                        <span className="text-blue-400 mr-2">gnaneshwar@ubuntu:~$</span>
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2 h-4 bg-gray-400 align-middle"
                        />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default InteractiveTerminal;
