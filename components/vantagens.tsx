import {
  Cpu,
  ReceiptText,
  Handshake,
  Sparkles,
  Settings,
  Shield,
} from "lucide-react";

import CardVantagens from "./cardVantagens";

export default function Vantagens() {
  return (
    <div className="flex flex-col gap-6 min-h-[calc(100vh-50vh)] p-6 md:p-12">
      <h2 className="text-4xl font-bold mt-4">Vantagens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardVantagens
          title="Manutenção ilimitada"
          description="Manutenção ilimitada sem custo adicional."
          icon={<Settings />}
          highlight
        />
        <CardVantagens
          title="Seguro"
          description="Seguro completo que cobre roubo, furto qualificado, danos elétricos, entre outros."
          icon={<Shield />}
          highlight
        />
        <CardVantagens
          title="Acesso à Última Tecnologia"
          description="Trabalhe com os melhores notebooks do mercado (Dell, Lenovo, HP) sem precisar investir em compras caras. Nossas opções são atualizadas e potentes!"
          icon={<Cpu />}
        />
        <CardVantagens
          title="Flexibilidade Total"
          description="Contratos de curto ou longo prazo, adaptados à necessidade do seu projeto ou crescimento. Equipar sua equipe nunca foi tão fácil."
          icon={<Handshake />}
        />
        <CardVantagens
          title="Custo-Benefício"
          description="Reduza custos operacionais e de manutenção. Foque no seu negócio enquanto nós cuidamos da tecnologia."
          icon={<ReceiptText />}
        />
        <CardVantagens
          title="Suporte Técnico Especializado"
          description="Nossa equipe está pronta para garantir que tudo funcione perfeitamente, sem interrupções."
          icon={<Sparkles />}
        />
      </div>
    </div>
  );
}
