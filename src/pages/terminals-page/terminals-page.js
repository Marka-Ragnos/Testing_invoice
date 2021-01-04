import React from "react";
import TerminalsTable from "../../components/terminals-table/terminals-table";
import TerminalsForm from "../../components/terminals-form/terminals-form";

const TerminalsPage = () => {
   return (
      <div className="terminals-page">
         <h1 className="terminals-page__title">Терминалы</h1>
         <TerminalsTable />
         <TerminalsForm />
      </div>
   );
};

export default TerminalsPage;
