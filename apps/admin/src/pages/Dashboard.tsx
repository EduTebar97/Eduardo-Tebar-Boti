import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { StatsCard } from '../components/StatsCard';
import { PostsTable } from '../components/PostsTable';
// EditorModal removed

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout onNewPost={() => navigate('/editor')}>


      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatsCard
          title="Publicados"
          value={12}
          icon="check_circle"
          color="green"
        />
        <StatsCard
          title="Borradores"
          value={3}
          icon="edit_document"
          color="yellow"
        />
        <StatsCard
          title="Programados"
          value={1}
          icon="schedule"
          color="purple"
        />
      </div>

      <PostsTable />
    </Layout>
  );
};
