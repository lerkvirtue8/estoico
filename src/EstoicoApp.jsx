import React from 'react';
import { Card, CardContent } from './components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';

// Placeholder for your actual product data
const products = { /* your product data stays unchanged */ };

export default function EstoicoApp() {
  return (
    <>
      {/* HERO SECTION WITH VIDEO + MANIFESTO */}
      <section className='relative h-[90vh] bg-black overflow-hidden mb-16'>
        <video
          src='/videos/estoico-manifesto.mp4'
          className='absolute inset-0 w-full h-full object-cover opacity-40'
          autoPlay
          loop
          muted
          playsInline
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-10' />
        <div className='relative z-20 flex flex-col items-center justify-center h-full text-center px-6'>
          <img
            src='/logos/estoico-crest.png'
            alt='ESTOICO Logo'
            className='w-28 md:w-40 opacity-90 mb-6 drop-shadow-lg'
          />
          <h1 className='text-5xl md:text-7xl font-serif text-white tracking-widest drop-shadow-xl'>
            ESTOICO
          </h1>
          <p className='mt-4 text-lg md:text-xl text-[#eaeaea] italic max-w-2xl leading-relaxed'>
            We don’t follow trends. We don’t chase validation. <br />
            We dress with conviction.
          </p>
          <p className='mt-6 uppercase tracking-wider text-[#d62828] font-medium text-sm'>
            This isn’t fashion. This is declaration.
          </p>
        </div>
      </section>

      {/* MAIN PRODUCT SECTION */}
      <main className='bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#2a2a2a] text-white min-h-screen px-6 py-12 font-sans'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-center text-[#f5f5f5] tracking-tight drop-shadow-lg mb-6'>
          Explore the Collection
        </h2>
        <p className='text-center text-[#ccc] max-w-xl mx-auto text-lg italic mb-12'>
          Chill, laid-back class. Stoic masculinity. No apologies.
        </p>

        <Tabs defaultValue='apparel' className='w-full'>
          <TabsList className='flex flex-wrap justify-center gap-3 mb-10'>
            {Object.keys(products).map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className='uppercase tracking-wider text-sm px-5 py-2 rounded-full border border-white/20 bg-[#1f1f1f] hover:bg-[#8c1c13] hover:text-white transition-colors'
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(products).map(([category, items]) => (
            <TabsContent
              value={category}
              key={category}
              className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
            >
              {items.map(({ url, alt }, index) => (
                <Card
                  key={index}
                  className='rounded-3xl shadow-xl bg-[#131313] border border-white/10 hover:scale-[1.02] transition-transform'
                >
                  <CardContent className='p-4'>
                    <img
                      src={url}
                      alt={alt}
                      className='w-full h-72 object-cover rounded-2xl border border-[#444]'
                    />
                    <p className='text-sm text-[#aaa] text-center mt-3 italic'>
                      {alt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </>
  );
}
