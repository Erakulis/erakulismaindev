import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.role) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch with you shortly to discuss your wellness needs.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", role: "" });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              We'll be in touch soon to discuss how ERAKULIS can transform your organization's wellness.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-primary/20">
      <CardHeader className="text-center px-4 sm:px-6">
        <div className="flex justify-center mb-4">
          <img src="/lovable-uploads/a1122e26-6d27-4f6b-a180-86371f82a04b.png" alt="Erakulis" className="h-6 sm:h-8 w-auto" />
        </div>
        <CardTitle className="text-xl sm:text-2xl">Get Started Today</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Join organizations already transforming their workforce wellness
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm sm:text-base">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="text-sm sm:text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Your Role</Label>
            <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hr-leader">HR Leader</SelectItem>
                <SelectItem value="operations-director">Operations Director</SelectItem>
                <SelectItem value="founder">Founder</SelectItem>
                <SelectItem value="university-leader">University Leader</SelectItem>
                <SelectItem value="insurance-broker">Insurance Broker</SelectItem>
                <SelectItem value="health-life-insurance">Health and Life Insurance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full mt-6">
            Get My Wellness Strategy
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;