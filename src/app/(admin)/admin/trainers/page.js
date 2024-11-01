import TrainerTable from "../../../../components/DataTables/TrainerTable";
import TrainerModal from "../../../../components/Modals/TrainerModal";
export default function Trainers() {
  return (
    <div className="w-full">
      <div className="w-full h-5 text-3xl font-bold flex justify-between items-start px-10 py-10">
        <h1>Trainers</h1>
        <TrainerModal />
      </div>
      <div className="px-10 w-full">
        <TrainerTable />
      </div>
    </div>
  );
}
