import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadFormPT = () => {
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
        title: "Por favor, preencha todos os campos",
        description: "Todos os campos são obrigatórios para enviar o formulário.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    toast({
      title: "Obrigado pelo seu interesse!",
      description: "Entraremos em contato em breve para discutir suas necessidades de bem-estar.",
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
            <h3 className="text-xl font-semibold mb-2">Obrigado!</h3>
            <p className="text-muted-foreground">
              Entraremos em contato em breve para discutir como o ERAKULIS pode transformar o bem-estar da sua organização.
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
        <CardTitle className="text-xl sm:text-2xl">Comece Hoje</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Junte-se às organizações que já estão transformando o bem-estar dos funcionários
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm sm:text-base">Nome Completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="text-sm sm:text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Endereço de Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Número de Telefone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Digite seu número de telefone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">Sua Função</Label>
            <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione sua função" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hr-leader">Líder de RH</SelectItem>
                <SelectItem value="operations-director">Diretor de Operações</SelectItem>
                <SelectItem value="founder">Fundador</SelectItem>
                <SelectItem value="university-leader">Líder Universitário</SelectItem>
                <SelectItem value="insurance-broker">Corretor de Seguros</SelectItem>
                <SelectItem value="health-life-insurance">Seguros de Saúde e Vida</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full mt-6">
            Obter Minha Estratégia de Bem-estar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadFormPT;