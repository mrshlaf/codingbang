"use client";

import { updateInquiryStatusAction } from "@/lib/admin-actions";

export function StatusSelect({
  id,
  defaultValue,
}: {
  id: string;
  defaultValue: string;
}) {
  return (
    <select
      name="status"
      defaultValue={defaultValue}
      onChange={async (e) => {
        await updateInquiryStatusAction(
          id,
          e.target.value as "new" | "read" | "replied"
        );
      }}
      className="px-2 py-1 rounded-md border border-border bg-background text-xs text-foreground focus:outline-none"
    >
      <option value="new">New</option>
      <option value="read">Read</option>
      <option value="replied">Replied</option>
    </select>
  );
}
