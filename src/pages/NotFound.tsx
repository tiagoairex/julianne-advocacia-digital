
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-lawyer-light">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-lawyer-dark mb-4">404</h1>
        <p className="text-2xl text-lawyer-gray mb-8">
          Página não encontrada
        </p>
        <p className="text-lawyer-gray max-w-md mx-auto mb-8">
          A página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <Button
          asChild
          className="bg-lawyer-dark hover:bg-lawyer-medium text-white font-medium px-6 py-3 rounded-md transition-all duration-300"
        >
          <a href="/">Voltar para a página inicial</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
