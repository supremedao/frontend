import Typography from "@/components/Typography";
import Link from "@/components/Link";

export default function Social() {
  return (
    <article className={""}>
      <Typography variant={"h3"} className={"mb-6 font-semibold"}>
        Follow us
      </Typography>

      <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 ">
        <li className={"flex"}>
          <Link
            href="https://mirror.xyz/0x4A2D30c7b9f7907D580f9A1902D42dd78B21F0d2"
            rel="noreferrer"
            target="_blank"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            class="shadow-dark-3 hover:shadow-dark-1 focus:shadow-dark-1 active:shadow-1 rounded-full bg-primary p-3 uppercase leading-normal text-white shadow-black/30 transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:text-white"
          >
            <span className="sr-only">Mirror</span>
            mirror
          </Link>
        </li>

        <li className={"flex"}>
          <Link
            href="https://twitter.com/supreme_dao"
            rel="noreferrer"
            target="_blank"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            class="shadow-dark-3 hover:shadow-dark-1 focus:shadow-dark-1 active:shadow-1 rounded-full bg-primary p-3 uppercase leading-normal text-white shadow-black/30 transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:text-white"
          >
            <span className="sr-only">Twitter</span>

            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Link>
        </li>

        <li className={"flex"}>
          <Link
            href="t.me/supremedaochat"
            rel="noreferrer"
            target="_blank"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            class="shadow-dark-3 hover:shadow-dark-1 focus:shadow-dark-1 active:shadow-1 rounded-full bg-primary p-3 uppercase leading-normal text-white shadow-black/30 transition duration-150 ease-in-out focus:outline-none focus:ring-0 dark:text-white"
          >
            <span className="sr-only">Telegram</span>

            <svg
              fill="currentColor"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Telegram icon</title>
              <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z" />
            </svg>
          </Link>
        </li>
      </ul>
    </article>
  );
}
