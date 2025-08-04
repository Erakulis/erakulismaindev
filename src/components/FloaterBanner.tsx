import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { useState } from "react";

const FloaterBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="p-4 bg-primary text-primary-foreground shadow-lg">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg">Ready to Transform Your Business?</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-sm opacity-90 mb-4">
          Schedule a discovery call to learn how Erakulis can support your business.
        </p>
        <Button variant="secondary" size="sm" className="w-full" onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2q7hvsRjNBPtfMIZUKtnZL2jDS5QAnroyiQCnge7EQ6ur7nZ5fN0Y1JlRnlGzkCs2XqyZMu1a9', '_blank')}>
          Schedule Discovery Call
        </Button>
      </Card>
    </div>
  );
};

export default FloaterBanner;