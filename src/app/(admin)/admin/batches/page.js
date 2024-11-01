import BatchesTable from "../../../../components/DataTables/BatchesTable";
import BatchModal from "../../../../components/Modals/BatchModal";
export default function Batches() {
  return (
    <div className="w-full">
      <div className="w-full h-5 text-3xl font-bold flex justify-between items-start px-10 py-10">
        <h1>Batches</h1>
        <BatchModal />
      </div>
      <div className="px-10 w-full">
        <BatchesTable />
      </div>
    </div>
  );
}
