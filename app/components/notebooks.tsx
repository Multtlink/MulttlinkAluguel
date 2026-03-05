import CardNotebooks from "./cardNotebooks";

type Notebook = {
  nome: string;
  especificacoes: Record<string, string | undefined>;
  preços: {
    "24x": string;
    "36x": string;
    "48x": string;
  };
  imagem?: string;
};

interface NotebookListProps {
  notebooks: Notebook[];
}

export function NotebookList({ notebooks }: NotebookListProps) {
  return (
    <section id="notebooks" className="p-6 md:p-12 w-full bg-neutral-100">
      <h2 className="text-3xl font-bold mb-10 tracking-tight text-slate-900">
        Notebooks para Aluguel
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {notebooks.map((notebook, index) => (
          <CardNotebooks
            key={index}
            title={notebook.nome}
            description={notebook.especificacoes?.tela}
            image={notebook.imagem}
            specs={notebook.especificacoes}
            prices={notebook.preços}
          />
        ))}
      </div>
    </section>
  );
}