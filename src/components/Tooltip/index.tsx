import { type JSX, Show, createSignal } from "solid-js";

type Props = {
  children: JSX.Element;
};

function Tooltip(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [clickCount, setClickCount] = createSignal(0);

  const messages = [
  "Merhaba!",
  "Yine mi tıklandı?",
  "Hala burada?",
  "Israrlısın, değil mi?",
  "Naber?",
  "Yine mi? Gerçekten mi?",
  "Merak ediyorsun!",
  "Hiç hoş değil!",
  "Bir ara ver!",
  "Bu rahatsız edici!",
  "Dokunma!",
  "Artık tıklama yok!",
  "Cidden?!",
  "Ah! Bu acıtıyor!",
  "İsrarcısın!",
  "Merak neden?",
  "Yoruluyorum!",
  "Sıkıldım!",
  "Yeter artık!",
  "Başka bir hobi bul!",
  "Dur, lütfen!",
  "Tamam, sonuncusu!",
  "Egehan'ı seviyorum",
  "İşte bu, işim bitti!",
  "Bıktım artık!",
  "Ne kadar sabırlısın!",
  "Biraz mola ver!",
  "Parmakların yorulmadı mı?",
  "Başka şeyler de var hayatta!",
  "Tıklamaktan vazgeç!",
  "Neden pes etmiyorsun?",
  "Bu kadarı fazla!",
  "Sana engel olamıyorum!",
  "Ve cidden Egehan'ı baya seviyorum!",
  "Tıklamaya doyamadın!",
  "Bu bir bağımlılık olabilir!",
  "Tıklama tutkunu!",
  "Merakın bitmiyor!",
  "Sen yorulmaz mısın?",
  "Bu kadar sebat takdire şayan!",
  "Belki de ara vermelisin?",
  "Tıklamak seni mutlu mu ediyor?",
  "Bu tıklama çılgınlığı nedir?",
  "Haydi, son bir kez daha!",
  "Tıklama rekoru kırıyorsun!",
  "Bu kadar tıklama yeter!",
  "Parmağın nasıl dayanıyor?",
  "Tıklama şampiyonu sensin!",
  "Bu azmin takdire şayan!",
  "Egehan'ı sevmeye olan azmim seninkinden fazla fakat sen yinede devam et!",
  "Tıklamaktan sıkılmadın mı?",
  "Sen bir tıklama ustasısın!",
  "Bu tıklama tutkusu nereden geliyor?",
  "Tıklamaya devam et, belki sürpriz olur!",
  "Sen tıkla, ben buradayım!"
  ];

  const currentMessage = () => {
    const count = clickCount();
    if (count >= messages.length) {
      return messages[messages.length - 1];
    }
    return messages[count];
  };

  return (
    <div class="relative inline-block">
      <div
        onMouseDown={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onMouseUp={() => {
          setIsVisible(false);
        }}
        onTouchStart={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onTouchEnd={() => {
          setIsVisible(false);
        }}
      >
        {props.children}
      </div>

      <Show when={isVisible()}>
        <div class="absolute left-1/2 -translate-x-1/2 -translate-y-24 mt-1 w-auto max-h-[70px] p-2 bg-black text-white text-center rounded-lg z-10 shadow-custom shadow-primary-500 border border-primary-500 whitespace-normal after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:shadow-custom after:shadow-primary-500 after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-black after:z-20">
          <p class="w-max">{currentMessage()}</p>
        </div>
      </Show>
    </div>
  );
}

export default Tooltip;
