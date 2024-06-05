import GenerateDocument from '@/components/forms/generate-document'
import SectionDivider from '@/components/section-divider'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full p-12">
      <div className="flex items-center flex-col gap-16">
        <div className="flex flex-col gap-4 text-center font-semibold max-w-[680px] min-h-screen">
          <h2 className="text-4xl">
            Máte{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
              právní problémy
            </span>
            , které potřebujete vyřešit?
          </h2>
          <h3 className="text-3xl brightness-50 font-normal">
            Zde je jeden z nejlepších asistentů AI pro právní záležitosti! Naše
            služby vám pomohou vyřešit problémy se stížnostmi, odvoláním před
            soudním řízením a smlouvami!
          </h3>
        </div>
        <SectionDivider />
        <GenerateDocument />
      </div>
    </main>
  )
}
