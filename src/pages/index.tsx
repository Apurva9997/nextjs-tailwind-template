import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Nextjs tailwind css template"
          description="Get started with next and tailwind"
        />
      }
    >
      <h2>Hello world</h2>
    </Main>
  );
};

export default Index;
