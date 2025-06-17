import React, { useState } from 'react';

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    try {
      setStatus('loading');
      
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed');
      }
      
      setStatus('success');
      setMessage(data.message || 'Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="flex-grow">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled={status === 'loading'}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-70"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {status === 'success' && (
        <p className="mt-2 text-sm text-green-600 dark:text-green-400">{message}</p>
      )}
      
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{message}</p>
      )}
      
      <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
        Subscribe to receive updates about new blog posts and events. We respect your privacy.
      </p>
    </div>
  );
};

export default NewsletterForm;
