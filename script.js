(() => {
    // Header and navigation.
    const toggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    function setTheme(theme) {
        const isDark = theme === 'dark';
        document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
        toggle.setAttribute('aria-pressed', String(isDark));
        toggle.textContent = isDark ? '☀️ Light mode' : '🌙 Dark mode';
        document.querySelector('meta[name="theme-color"]').content = isDark ? '#111827' : '#f6f7fb';
    }

    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    toggle.addEventListener('click', () => {
        const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        setTheme(theme);
    });

    const sections = [...document.querySelectorAll('main section[id]')];
    const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                    link.setAttribute('aria-current', 'location');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        });
    }, { rootMargin: '-20% 0px -65% 0px' });
    sections.forEach(section => observer.observe(section));

    // Homepage clock.
    const clock = document.getElementById('digital-clock');
    const updateClock = () => {
        const now = new Date();
        clock.dateTime = now.toISOString();
        clock.textContent = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };
    updateClock();
    window.setInterval(updateClock, 1000);

    // Activities section.
    const activities = [
        { name: 'Running', alt: 'Runner training on an outdoor path', src: 'https://experiencelife.lifetime.life/wp-content/uploads/2020/05/etbd20314723-trail-running-card.jpg' },
        { name: 'Cycling', alt: 'Cyclist riding on a scenic road', src: 'https://worldexpeditions.com/croppedImages/Asia/China/Cycling-in-a-limestone-karst-landscape_-Yangshou-8843172-1920px.jpg' },
        { name: 'Gym', alt: 'Athlete training with weights in a gym', src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80' }
    ];
    let activityIndex = 0;
    const showActivity = index => {
        activityIndex = (index + activities.length) % activities.length;
        const activity = activities[activityIndex];
        document.getElementById('activity-image').src = activity.src;
        document.getElementById('activity-image').alt = activity.alt;
        document.getElementById('activity-name').textContent = activity.name;
        document.getElementById('activity-count').textContent = `${activityIndex + 1} of ${activities.length}`;
    };
    document.getElementById('previous-activity').addEventListener('click', () => showActivity(activityIndex - 1));
    document.getElementById('next-activity').addEventListener('click', () => showActivity(activityIndex + 1));

    // Quote section.
    const quotes = [
        ['Small steps every day add up to big change.', 'Unknown'],
        ['The secret of getting ahead is getting started.', 'Mark Twain'],
        ['It always seems impossible until it’s done.', 'Nelson Mandela'],
        ['Great things are done by a series of small things brought together.', 'Vincent van Gogh']
    ];
    document.getElementById('new-quote').addEventListener('click', () => {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quote-text').textContent = quote[0];
        document.getElementById('quote-author').textContent = `— ${quote[1]}`;
    });

    // Contact section.
    document.getElementById('message-form').addEventListener('submit', event => {
        event.preventDefault();
        const form = event.currentTarget;
        const status = document.getElementById('form-message');
        if (!form.checkValidity()) {
            form.reportValidity();
            status.textContent = 'Please check the highlighted fields and try again.';
            return;
        }
        status.textContent = 'Thanks! Your message is ready to be sent.';
        form.reset();
    });
})();