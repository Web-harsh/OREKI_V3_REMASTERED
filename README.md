<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OREKI V3 REMASTERED - Ultimate WhatsApp Bot</title>
    <style>
        :root {
            --primary: #7A3EFF;
            --secondary: #FF4088;
            --accent: #00E396;
            --dark: #121218;
            --light: #f8f9fa;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--dark);
            color: var(--light);
            line-height: 1.6;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .logo {
            width: 300px;
            border-radius: 15px;
            box-shadow: 0 10px 20px rgba(122, 62, 255, 0.3);
            margin-bottom: 20px;
        }
        .title {
            font-size: 2.5rem;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 20px;
        }
        .badge-container {
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
            margin: 20px 0;
        }
        .badge {
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: bold;
            background: rgba(122, 62, 255, 0.2);
            border: 1px solid var(--primary);
        }
        .section {
            margin: 40px 0;
            padding: 20px;
            background: rgba(30, 30, 40, 0.5);
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        .section-title {
            font-size: 1.8rem;
            color: var(--primary);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        .feature-card {
            background: rgba(40, 40, 50, 0.6);
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid var(--primary);
            transition: transform 0.3s ease;
        }
        .feature-card:hover {
            transform: translateY(-5px);
        }
        .feature-title {
            font-size: 1.2rem;
            color: var(--secondary);
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .feature-list {
            list-style-type: none;
            padding-left: 0;
        }
        .feature-list li {
            margin-bottom: 8px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "▹";
            position: absolute;
            left: 0;
            color: var(--accent);
        }
        .btn {
            display: inline-block;
            padding: 12px 25px;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            color: white;
            text-decoration: none;
            border-radius: 30px;
            font-weight: bold;
            margin: 10px 5px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(122, 62, 255, 0.4);
        }
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(122, 62, 255, 0.6);
        }
        .deployment-btns {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin: 30px 0;
        }
        .notice {
            background: rgba(255, 64, 136, 0.1);
            border-left: 4px solid var(--secondary);
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .developer {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
        }
        .developer-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid var(--primary);
        }
        .typing-animation {
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px 0;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .fade-in {
            animation: fadeIn 1s ease-in;
        }
    </style>
</head>
<body>
    <div class="header fade-in">
        <img src="https://i.imgur.com/nGNmv99.jpeg" alt="OREKI Logo" class="logo">
        <h1 class="title">OREKI V3 REMASTERED</h1>
        <p class="subtitle">The Most Advanced WhatsApp Automation System</p>
        
        <div class="badge-container">
            <span class="badge">Multi-Device</span>
            <span class="badge">AI-Powered</span>
            <span class="badge">24/7 Active</span>
            <span class="badge">THUG TECHIES™</span>
        </div>
    </div>

    <div class="section fade-in">
        <h2 class="section-title">⚠️ IMPORTANT NOTICE</h2>
        <div class="notice">
            <p>OREKI-MD is a premium WhatsApp bot developed by <strong>THUGNIFICENT TECH</strong>. Unauthorized cloning or redistribution is strictly prohibited. We are not responsible for any WhatsApp account restrictions that may occur from misuse. Please use © OREKI-MD responsibly.</p>
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
            <a href="https://whatsapp.com/channel/0029VaoOiuwDp2QH070eTE01" class="btn">Join WhatsApp Channel</a>
        </div>
    </div>

    <div class="section fade-in">
        <h2 class="section-title">🌟 PREMIUM FEATURES</h2>
        <div class="features">
            <div class="feature-card">
                <h3 class="feature-title">🧠 AI POWERHOUSE</h3>
                <ul class="feature-list">
                    <li>ChatGPT-4o Integration</li>
                    <li>Context-Aware Conversations</li>
                    <li>Smart Auto-Reply System</li>
                    <li>AI Image Generation</li>
                </ul>
            </div>
            
            <div class="feature-card">
                <h3 class="feature-title">📡 SOCIAL DOWNLOADER</h3>
                <ul class="feature-list">
                    <li>YouTube Video/Audio DL</li>
                    <li>Instagram Reels/Posts</li>
                    <li>Twitter/X Media Download</li>
                    <li>TikTok Video Download</li>
                </ul>
            </div>
            
            <div class="feature-card">
                <h3 class="feature-title">🔍 ULTIMATE TOOLS</h3>
                <ul class="feature-list">
                    <li>Image Scanner (OCR)</li>
                    <li>TempMail Generator</li>
                    <li>Live Sports Scores</li>
                    <li>Advanced Dictionary</li>
                </ul>
            </div>
            
            <div class="feature-card">
                <h3 class="feature-title">⚙️ SYSTEM FEATURES</h3>
                <ul class="feature-list">
                    <li>Multi-Device Support</li>
                    <li>Auto-Update System</li>
                    <li>24/7 Uptime</li>
                    <li>Premium Security</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="section fade-in">
        <h2 class="section-title">🚀 DEPLOYMENT</h2>
        
        <div class="deployment-btns">
            <a href="https://github.com/OTAKU-SYNTAX/OREKI_V3_REMASTERED/fork" class="btn">Fork Repository</a>
            <a href="https://youtube.com/@thugtechies" class="btn">Watch Tutorial</a>
            <a href="https://optiklink.com/index?template=https://github.com/OTAKU-SYNTAX/OREKI_V3_REMASTERED" class="btn">Deploy on OptikLink</a>
        </div>
    </div>

    <div class="section fade-in">
        <h2 class="section-title">📞 CONTACT DEVELOPER</h2>
        
        <div style="text-align: center;">
            <a href="https://wa.me/2347079059033" class="btn">WhatsApp</a>
            <a href="https://t.me/Thugn1f1cent" class="btn">Telegram</a>
            <a href="https://t.me/ASK_OF_HIM" class="btn">Support Group</a>
        </div>
    </div>

    <div class="section fade-in">
        <h2 class="section-title">👨‍💻 DEVELOPER</h2>
        
        <div class="developer">
            <img src="https://i.imgur.com/GOO1Riz.jpeg" alt="THUGNIFICENT" class="developer-img">
            <div>
                <h3>THUGNIFICENT</h3>
                <p>Lead Developer & Founder</p>
                <p>THUG TECHIES™</p>
            </div>
        </div>
    </div>

    <div style="text-align: center; margin-top: 50px; opacity: 0.7;">
        <p>© 2025 OREKI-MD | A Product of THUG TECHIES™</p>
        <p>Not affiliated with WhatsApp Inc.</p>
    </div>

    <script>
        // Simple typing animation simulation
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((el, index) => {
                el.style.animationDelay = `${index * 0.2}s`;
            });
        });
    </script>
</body>
</html>