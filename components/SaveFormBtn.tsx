"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { HiSaveAs } from "react-icons/hi";
import useDesigner from "./hooks/useDesigner";
import { GetFormById, UpdateFormContent } from "@/actions/form";
import { toast } from "./ui/use-toast";
import { FaSpinner } from "react-icons/fa";

function SaveFormBtn({ id }: { id: number }) {
  const { elements } = useDesigner();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const form = await GetFormById(id);
      if (form?.content.length === 0) {
        await UpdateFormContent(id, JSON.stringify([]));
      }
    };
    fetchData();
  }, [id]);

  const updateFormContent = async () => {
    try {
      setLoading(true);
      const jsonElements = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElements);
      toast({
        title: "Success",
        description: "Your form has been saved",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button variant={"outline"} className="gap-2" disabled={loading} onClick={updateFormContent}>
      <HiSaveAs className="h-4 w-4" />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
}

export default SaveFormBtn;
