"use client";

import { useState } from "react";
import { X, Flag } from "lucide-react";
import { useApp } from "./providers/AppProvider";
import { useLanguage } from "./providers/LanguageProvider";

export default function ReportShopModal({
  shopSlug,
  shopName,
  onClose,
}: {
  shopSlug: string;
  shopName: string;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const { reportShop, showToast } = useApp();
  const [reason, setReason] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!reason) return;
    reportShop(shopSlug, reason, comment.trim());
    showToast(t.toast.reportSent);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-neutral-950/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.report.title}
        className="relative w-full max-w-md rounded-t-2xl bg-white p-6 shadow-card-hover dark:bg-neutral-900 sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400">
              <Flag className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-base font-semibold text-neutral-900 dark:text-white">
                {t.report.title}
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {shopName}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.report.cancel}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {t.report.description}
        </p>

        <fieldset className="mt-4 flex flex-col gap-2">
          {t.report.reasons.map((item) => (
            <label
              key={item}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
                reason === item
                  ? "border-primary-600 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-900/40 dark:text-primary-300"
                  : "border-neutral-200 text-neutral-700 hover:border-neutral-300 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600"
              }`}
            >
              <input
                type="radio"
                name="report-reason"
                value={item}
                checked={reason === item}
                onChange={() => setReason(item)}
                className="h-4 w-4 accent-primary-600"
              />
              {item}
            </label>
          ))}
        </fieldset>

        <label className="mt-4 block">
          <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
            {t.report.commentLabel}
          </span>
          <textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder={t.report.commentPlaceholder}
            rows={3}
            className="mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-200"
          />
        </label>

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            {t.report.cancel}
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!reason}
            className="flex-1 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t.report.submit}
          </button>
        </div>
      </div>
    </div>
  );
}
