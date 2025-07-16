import { EmptyState } from "@/components/ui/empty-state";


export const CancelledState = () => {
    return (
        <div className="bg-white rounded-lg px-4 py-5 flex flex-col gap-y-8 items-center">
            <EmptyState 
                image="/Cancelled.svg"
                title="Meeting Cancelled"
                description="The meeting was cancelled"
            />
        </div>
    )
}