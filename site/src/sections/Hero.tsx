import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SiGithub } from 'react-icons/si'

export function Hero() {
  return (
    <header className="pt-32 pb-12">
      <a
        href="https://nyaggah.com/"
        className="mb-8 flex w-max flex-col items-start justify-start space-y-2 no-underline contrast-100 grayscale transition-all duration-300 hover:grayscale-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 27"
          className="fill-foreground ml-[2px] h-auto w-8"
        >
          <path d="M.1 27L0 .6 25 27z" />
          <path d="M12.5 27L24.9 0v27z" className="fill-foreground/60" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 116 25"
          className="fill-foreground h-8"
        >
          <path d="M.192 24.362V20.97c.15.021.261.032.336.032.48 0 .853-.15 1.12-.448.267-.31.4-.746.4-1.312V.618h3.456v19.168c0 1.013-.187 1.861-.56 2.544a3.488 3.488 0 0 1-1.6 1.536c-.704.341-1.557.512-2.56.512H.496a3.05 3.05 0 0 1-.304-.016Zm12.318.032c-.96 0-1.787-.224-2.48-.672a4.47 4.47 0 0 1-1.585-1.824c-.362-.768-.544-1.632-.544-2.592V5.45c0-.97.182-1.834.544-2.592a4.47 4.47 0 0 1 1.584-1.824c.694-.448 1.52-.672 2.48-.672s1.782.224 2.464.672a4.32 4.32 0 0 1 1.584 1.824c.374.768.56 1.632.56 2.592v13.856c0 .96-.186 1.824-.56 2.592a4.32 4.32 0 0 1-1.584 1.824c-.682.448-1.504.672-2.464.672Zm0-3.36c.426 0 .725-.176.895-.528.17-.363.256-.762.256-1.2V5.45c0-.437-.09-.832-.272-1.184-.181-.362-.474-.544-.88-.544-.394 0-.688.182-.88.544a2.546 2.546 0 0 0-.272 1.184v13.856c0 .438.09.837.272 1.2.182.352.475.528.88.528Zm7.02 3.104V.618h7.904V4.17h-4.448v6.336h3.2v3.456h-3.2v6.624h4.448v3.552H19.53Zm15.406 0V.618h3.232l3.2 12.256.288 1.088h.192V.618h3.168v23.52h-2.912l-3.52-12.256-.288-1.088h-.192v13.344h-3.168Zm15.345 0V14.122L46.761.618h3.392l1.696 7.52.112 1.024h.096l.112-1.024 1.696-7.52h3.392l-3.52 13.504v10.016h-3.456Zm7.217 0L61.05.618h4.224l3.552 23.52h-3.36l-.64-4.8h-3.328l-.64 4.8h-3.36Zm4.48-8.448h2.367l-.992-7.904-.096-1.248h-.191l-.097 1.248-.992 7.904Zm12.581 8.704c-.95 0-1.723-.224-2.32-.672-.597-.448-1.04-1.056-1.328-1.824-.277-.768-.416-1.632-.416-2.592V5.45c0-.95.187-1.808.56-2.576a4.43 4.43 0 0 1 1.6-1.824c.693-.458 1.51-.688 2.448-.688.715 0 1.355.134 1.92.4a3.993 3.993 0 0 1 1.456 1.088c.405.47.71 1.014.912 1.632.213.608.32 1.264.32 1.968v3.616h-3.456V5.45c0-.47-.085-.874-.256-1.216-.17-.341-.47-.512-.896-.512-.416 0-.715.182-.896.544-.17.352-.256.747-.256 1.184v14.144c0 .459.09.864.272 1.216.181.341.475.512.88.512.427 0 .725-.17.896-.512.17-.352.256-.757.256-1.216v-3.936h-1.376v-3.232h4.832v11.712h-2.048l-.416-1.28c-.299.48-.683.859-1.152 1.136a3 3 0 0 1-1.536.4Zm11.625 0c-.95 0-1.723-.224-2.32-.672-.597-.448-1.04-1.056-1.328-1.824-.277-.768-.416-1.632-.416-2.592V5.45c0-.95.187-1.808.56-2.576a4.43 4.43 0 0 1 1.6-1.824c.693-.458 1.51-.688 2.448-.688.715 0 1.355.134 1.92.4a3.993 3.993 0 0 1 1.456 1.088c.405.47.71 1.014.912 1.632.213.608.32 1.264.32 1.968v3.616H87.88V5.45c0-.47-.085-.874-.256-1.216-.17-.341-.47-.512-.896-.512-.416 0-.715.182-.896.544-.17.352-.256.747-.256 1.184v14.144c0 .459.09.864.272 1.216.181.341.475.512.88.512.427 0 .725-.17.896-.512.17-.352.256-.757.256-1.216v-3.936h-1.376v-3.232h4.832v11.712h-2.048l-.416-1.28c-.299.48-.683.859-1.152 1.136a3 3 0 0 1-1.536.4Zm7.001-.256L96.737.618h4.224l3.552 23.52h-3.36l-.64-4.8h-3.328l-.64 4.8h-3.36Zm4.48-8.448h2.368l-.992-7.904-.096-1.248h-.192l-.096 1.248-.992 7.904Zm8.678 8.448V.618h3.456v9.728h2.688V.618h3.456v23.52h-3.456v-10.24h-2.688v10.24h-3.456Z" />
        </svg>
      </a>

      {/* <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl"> */}
      <h1 className="z-10 mt-0! max-w-lg text-2xl leading-tight md:text-3xl">
        Joe + AI = A Layup{' '}
        <span className="inline-block animate-bounce">🏀</span>
      </h1>
      {/* <p className="text-xl text-muted-foreground text-balance"> */}
      <p className="text-muted-foreground z-10 mt-0! max-w-lg text-xl leading-tight text-balance md:text-2xl">
        An outsider's proposal for autonomous{' '}
        <span className="whitespace-nowrap">AI-aided</span> product development
        at Layup Parts
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#problem"
          // className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          className={cn(buttonVariants({ variant: 'default' }), 'rounded-full')}
        >
          Read the proposal
        </a>
        <a
          href="https://nyaggah.github.io/layup/"
          // className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          className={cn(
            buttonVariants({ variant: 'secondary' }),
            'flex items-center gap-2 rounded-full',
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
          View on GitHub
        </a>
      </div>
    </header>
  )
}
