"use client";

import { formSchema, formSchemaType } from "@/schemas/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ImSpinner2 } from "react-icons/im";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { deleteForm } from "@/actions/form";
import { useState } from "react";

function DeleteFormBtn({ formId }: { formId: number }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  });

  async function onDelete(formId: number) {
    setLoading(true);
    try {
      await deleteForm(formId);
      toast({
        title: "Success",
        description: "Form deleted successfully",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again later",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full flex justify-between items-center mt-2 text-md gap-4" variant="destructive">
          <span className="flex-grow text-center">Delete Form</span>
          <FaTrash className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete form</DialogTitle>
          <DialogDescription>Are you sure you want to delete the form?</DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-col gap-3">
          <Button onClick={() => onDelete(formId)} disabled={loading} className="w-full mt-4" variant={"destructive"}>
            {!loading && <span>Delete</span>}
            {loading && <ImSpinner2 className="animate-spin" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteFormBtn;
