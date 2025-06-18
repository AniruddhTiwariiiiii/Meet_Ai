"use client";

import { ErrorState } from "@/components/ui/error-state";

const ErrorPage = () => {
    return (
        <ErrorState 
            title= "Error Loading Agents"
            description="Something went wrong while loading agents. Please try again later."
        />
    );
};