import BatchesTable from "../../../../components/DataTables/BatchesTable";
// import BatchModal from "../../../../components/Modals/BatchModal";
export default function Batches() {
  return (
    <div className="w-full">
      <div>{/* <BatchModal /> */}</div>
      <div className="px-10 w-full">
        <BatchesTable />
      </div>
    </div>
  );
}
