import React, { useState, useEffect } from 'react';

function Typewriter({ words, loop = true, typeSpeed = 100, deleteSpeed = 50, delaySpeed = 1000 }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), delaySpeed);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? deleteSpeed : typeSpeed);
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, typingSpeed, delaySpeed, deleteSpeed, typeSpeed, words]);

  // Use a non-breaking space as a placeholder when text is empty
  const displayText = text || '\u00A0'; // '\u00A0' is the Unicode for a non-breaking space

  return (
    <span>{displayText}</span>
  );
}

export default Typewriter;
