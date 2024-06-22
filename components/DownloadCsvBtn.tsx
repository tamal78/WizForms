"use client";

import React from "react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import { ElementsType } from "./FormElements";
import { Download } from "lucide-react";
import CsvDownloader from "react-csv-downloader";

type Row = { [key: string]: string } & {
  submittedAt: Date;
};

function FormLinkShare({
  columns,
  rows,
  name,
}: {
  columns: {
    id: string;
    label: string;
    required: boolean;
    type: ElementsType;
  }[];
  rows: Row[];
  name: string;
}) {
  const csvColumns = columns.map((col) => {
    return {
      id: col.id,
      displayName: col.label,
    };
  });

  const csvRows = rows.map((row) => {
    const { submittedAt, ...rest } = row;
    return rest;
  });

  return (
    <div className="flex flex-grow gap-4 items-center">
      <CsvDownloader filename={name} extension=".csv" separator="," datas={csvRows} columns={csvColumns}>
        <Button
          className="w-[200px]"
          onClick={() => {
            toast({
              title: "Download Started!",
              description: "Form Responses Downloaded In CSV",
            });
          }}
        >
          <Download className="mr-2 h-4 w-4" />
          Download CSV
        </Button>
      </CsvDownloader>
    </div>
  );
}

export default FormLinkShare;
