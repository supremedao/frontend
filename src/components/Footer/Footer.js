import Social from "./Social";
import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Link from "@/components/Link";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <Typography variant={"h3"}>Stay Up to Date</Typography>
                <Typography className="text-gray-500">
                  Subscribe to our weekly newsletter for updates
                </Typography>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label for="UserEmail" className="sr-only">
                  Email
                </label>
                <div className="flex items-center gap-2 rounded-full border border-black/50 bg-black/5 px-3 py-1 focus-within:ring">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email"
                    className="ml-2 mr-0 h-16 w-full border-none bg-transparent outline-0 focus:border-transparent focus:ring-transparent sm:text-lg"
                  />

                  <Button
                    color={"blue"}
                    className="mt-1 w-full tracking-wide text-white transition-none sm:mt-0 sm:w-auto sm:shrink-0"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>

            <article className={"col-span-2"}>
              <Typography className="mb-5 mt-2 text-base text-gray-500">
                Company
              </Typography>

              <div className={"grid grid-cols-2 gap-8"}>
                <div className="col-span-2 sm:col-span-1">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link variant={"h4"} href="#">
                        Open app
                      </Link>
                    </li>

                    <li>
                      <Link variant={"h4"} href="#">
                        Strategies
                      </Link>
                    </li>

                    <li>
                      <Link variant={"h4"} href="#">
                        About us
                      </Link>
                    </li>

                    <li>
                      <Link variant={"h4"} href="#">
                        Documentation
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link variant={"h4"} href="#">
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link variant={"h4"} href="#">
                        Privacy Policy
                      </Link>
                    </li>

                    <li>
                      <Link variant={"h4"} href="#">
                        Term of Service
                      </Link>
                    </li>

                    <li>
                      <Link variant={"h4"} href="#">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <article className={"col-span-2"}>
              <Social />
              <Typography className={"mt-10 text-xl"}>
                Copyright 2024 &copy; SupremeDAO. All right reserved
              </Typography>
            </article>
          </div>
        </div>
      </div>
    </footer>
  );
}
