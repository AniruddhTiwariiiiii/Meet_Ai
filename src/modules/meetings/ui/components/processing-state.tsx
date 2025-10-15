import { EmptyState } from "@/components/ui/empty-state";


export const ProcessingState = () => {
    return (
        <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center">
            <EmptyState 
                image="/Processing.svg"
                title="Meeting completed"
                description="The meeting was completed, a summary will appear soon"
            />
        </div>
    )
}