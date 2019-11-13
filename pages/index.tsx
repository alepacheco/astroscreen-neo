import '../css/index.scss';
import { Interface } from '../components/Interface';
import { Table } from '../components/Table';
const Index = () => {
  return (
    <div className="page">
      <Interface>
        <Table />
      </Interface>

      <style jsx>{`
        .page {
        }
      `}</style>
    </div>
  );
};

export default Index;
