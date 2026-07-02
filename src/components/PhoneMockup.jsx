// Mockup "vivo": uma imagem (mão segurando o celular) com o vídeo tocando
// exatamente na área da tela, em loop e mudo, como uma captura de tela viva.
//
// Como o banner tem a tela preenchida (não transparente), o vídeo fica POR CIMA
// da imagem, cobrindo o placeholder da tela. A moldura preta emoldura o vídeo.
//
// screen = posição/tamanho da tela em % relativo à imagem:
//   { top, left, width, height, radius, rotate }
const PhoneMockup = ({ image, video, screen = {}, alt = '' }) => {
  const {
    top = 0,
    left = 0,
    width = 0,
    height = 0,
    radius = 12,
    rotate = 0,
  } = screen

  return (
    <div className="relative w-full mx-auto" style={{ aspectRatio: '1920 / 1080' }}>
      {/* Imagem do celular ao fundo */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none z-0"
      />
      {/* Vídeo por cima, encaixado na área da tela */}
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute object-cover z-10"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${width}%`,
          height: `${height}%`,
          borderRadius: `${radius}px`,
          transform: rotate ? `rotate(${rotate}deg)` : undefined,
        }}
      />
    </div>
  )
}

export default PhoneMockup
