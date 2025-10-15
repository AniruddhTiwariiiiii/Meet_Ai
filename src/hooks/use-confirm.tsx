"use client";

import { JSX, useState } from "react";
import { Button } from "@/components/ui/button";
import { ResponsiveDialog } from "@/components/ui/responsive-dialog";

type UseConfirmProps = {
  title: string;
  description: string;
};

export const useConfirm = ({
  title,
  description,
}: UseConfirmProps): [() => JSX.Element, () => Promise<boolean>] => {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = () => {
    return new Promise<boolean>((resolve) => {
      setPromise({ resolve });
    });
  };

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDialog = () => (
    <ResponsiveDialog
      open={promise !== null}
      onOpenChange={handleClose}
      title={title}
      description={description}
    >
    <div className="pt-4 w-full flex flex-row gap-x-2 justify-end">
      <Button 
        onClick={handleCancel} 
        variant="outline"
      >
        Cancel
      </Button>
      <Button 
        onClick={handleConfirm}
      >
        Confirm
      </Button>
  </div>

    </ResponsiveDialog>
  );

  return [ConfirmationDialog, confirm];
};
