import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30 bg-gradient-card/50 backdrop-blur-sm relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gradient">EMPEROR BULLS</h3>
            <p className="text-muted-foreground leading-relaxed">
              Dominating global markets through precision trading, advanced AI analytics,
              and institutional-grade excellence since 2009.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gradient-primary/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span className="text-primary font-bold">𝕏</span>
              </div>
              <div className="w-10 h-10 bg-gradient-primary/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <a
                  href="https://www.britishschooloflanguages.com/emperor-bulls-best-share-market-institute-in-ludhiana-share-market-coaching-stock-market-academy-in-ludhiana" // replace with your LinkedIn URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  in
                </a>
              </div>

              <div className="w-10 h-10 bg-gradient-primary/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <a
                  href="https://www.instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.304.975.975 1.242 2.242 1.304 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.304 3.608-.975.975-2.242 1.242-3.608 1.304-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.975-1.242-2.242-1.304-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.304-3.608.975-.975 2.242-1.242 3.608-1.304 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.756 0 8.333.013 7.052.072 5.773.131 4.638.422 3.677 1.383 2.716 2.344 2.425 3.479 2.366 4.758.013 8.333 0 8.756 0 12s.013 3.667.072 4.948c.059 1.279.35 2.414 1.311 3.375.961.961 2.096 1.252 3.375 1.311C8.333 23.987 8.756 24 12 24s3.667-.013 4.948-.072c1.279-.059 2.414-.35 3.375-1.311.961-.961 1.252-2.096 1.311-3.375C23.987 15.667 24 15.244 24 12s-.013-3.667-.072-4.948c-.059-1.279-.35-2.414-1.311-3.375C21.656.422 20.521.131 19.242.072 17.961.013 17.538 0 14.293 0H12zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 0 0 0 2.881z" />
                  </svg>
                </a>
              </div>



              <div className="w-10 h-10 bg-gradient-primary/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span className="text-primary font-bold">📧</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-lg">Trading Services</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="hover:text-primary transition-colors cursor-pointer">AI Analytics</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Risk Management</div>
              <div className="hover:text-primary transition-colors cursor-pointer">High-Speed Trading</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Portfolio Optimization</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-lg">Company</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="hover:text-primary transition-colors cursor-pointer">About Us</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Leadership Team</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Careers</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Press & Media</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-lg">Legal & Compliance</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Terms of Service</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Risk Disclosure</div>
              <div className="hover:text-primary transition-colors cursor-pointer">Regulatory Compliance</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="h-px bg-gradient-primary flex-1 max-w-32"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <div className="h-px bg-gradient-primary flex-1 max-w-32"></div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            &copy; 2025 Emperor Bulls Trading Ltd. All rights reserved. |
            Trading involves substantial risk of loss. |
            Licensed & Regulated by Financial Authorities
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            🏆 #1 Quantitative Trading Platform | 🌟 98.7% Client Satisfaction | 💎 $2.1B+ AUM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
