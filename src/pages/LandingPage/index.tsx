import { LandingLayout } from "../../components";
import Hero from "../../components/Hero";

export const LandingPage: React.FC = () => {
  return (
    <LandingLayout>
      <Hero
        title="Conectando Suas Ações ao Impacto Sustentável"
        subtitle="Nossa plataforma foi projetada para capacitá-lo a fazer a diferença, permitindo que você registre e participe de atividades que impulsionam as metas ESG."
        image="https://source.unsplash.com/collection/10054447/800x600"
        ctaText="Entrar"
        ctaLink="/login"
      />
    </LandingLayout>
  );
};
