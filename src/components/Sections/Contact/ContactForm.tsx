import {FC, memo} from 'react';

const ContactForm: FC = memo(() => {
  return (
    <div className="flex flex-col gap-y-6">
      <p className="prose-sm text-neutral-300 sm:prose-base">
        The best way to reach me is directly by email. I typically respond within 24 hours.
      </p>
      <a
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800"
        href="mailto:mingtao.guo@outlook.com"
      >
        Send me an email
      </a>
      <p className="text-xs text-neutral-500">
        Opens your email client: mingtao.guo@outlook.com
      </p>
    </div>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
