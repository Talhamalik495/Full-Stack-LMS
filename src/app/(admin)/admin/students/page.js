import StudentTable from "@/components/Modals/StudentModal";
import StudentModal from "../../../../components/DataTables/StudentTable";
export default function Students() {
  return (
    <div className="w-full">
      <div className=" h-10 flex justify-between py-10 px-10 w-full">
        {" "}
        <h1 className="text-3xl font-bold">Student</h1>
        <StudentTable />
      </div>
      <div className="px-10 w-full">
        <StudentModal />
      </div>
    </div>
  );
}
