import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <title>Conflict</title>
        <meta name="description" content="The first and only JS framework for Discord bots. Featuring JSX views, command handling, event handling, hooks, state, and more. | https://discord.gg/jCgArsS7ub" />
        <link rel="favicon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.png" />
              
        <meta property="og:title" content="Conflict - The Discord framework for the future" />
        <meta property="og:url" content="https://conflict.js.org/" />
        <meta property="og:image" content="https://conflict.js.org/favicon.png" />
        <meta property="og:description" content="The first and only JS framework for Discord bots. Featuring JSX views, command handling, event handling, hooks, state, and more. | https://discord.gg/jCgArsS7ub" />
        <meta property="og:site_name" content="Conflict" />
        <meta property="theme-color" content="#186ce4" />
      </Head>

      <main className="text-center my-10" style={{ overflowX: 'hidden' }}>
        <h1 className={styles.title} className="text-5xl md:text-7xl lg:text-8xl font-extrabold">
          <img src="/conflict.svg" style={{ display: 'inline', verticalAlign: 'bottom', width: '300px' }}/>
        </h1>


        <p className={styles.description} className="font-[Lexend] text-2xl my-2">
          The first and only JavaScript UI framework for Discord bots
        </p>

        <section className="w-[100vw] bg-[#186ce4] my-10 p-10">
<div className="h-full max-w-2xl" style={{ margin: '0 auto' }}>

          <h1 className="text-white text-3xl font-[DM Sans]">Stop writing the same thing <span className="text-[#ffffffcc]">thing</span> <span className="text-[#ffffff99]" style={{ marginLeft: '-10px' }}>thing</span> <span className="text-[#ffffff66]" style={{ marginLeft: '-10px' }}>thing</span> <span className="text-[#ffffff33]" style={{ marginLeft: '-10px' }}>thing</span> over and over again</h1>
  <p className="text-white my-2">Declare your views like you would with any other modern web interface: JSX. Forget making classes, calling methods, and messing with JSON. JSX is easier to mantain, easier to modify, and more consistent.</p>
  </div>
        </section>
  
        <section className="w-[100vw] bg-[#fe4c4c] my-10 p-10">
<div className="h-full max-w-2xl" style={{ margin: '0 auto' }}>

          <h1 className="text-white text-3xl font-[DM Sans]">Scale effortlessly with built-in sharding</h1>
  <p className="text-white my-2">What you make today should be ready for tomorrow. No matter how many servers your bot reaches, scale as much as needed with built-in sharding.</p>
  </div>
        </section>

  
        <section className="w-[100vw] bg-[#186ce4] my-10 p-10">
<div className="h-full max-w-2xl" style={{ margin: '0 auto' }}>
          <h1 className="text-white text-3xl font-[DM Sans]">Build commands that flow, not block</h1>
  <p className="text-white my-2">Commands and user interfaces should flow with every click without needing mountains of callbacks. Conflict lets you control the entire command life cycle in one place, not just the invocation.</p>

  </div>
        </section>

  
        <div className={styles.grid + " font-[DM Sans]"} style={{ fontFamily: 'DM Sans', margin: '0 auto' }}>

{/*
          <a href="#" className={styles.card + " disabled"}>
            <h2>Documentation &rarr;</h2>
            <p>Start building amazing bots with Conflict.</p>
          </a>
*/}
          <a href="https://discord.gg/Bxtf45CCX7" className={styles.card}>
            <h2>Discuss &rarr;</h2>
            <p>Join the Conflict Discord server to contribute or get help.</p>
          </a>
{/*
          <a
            href="#"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>See what people have already made with Conflict.</p>
          </a>
*/}
          <a
            href="https://github.com/yodalightsabr/conflict"
            className={styles.card}
          >
            <h2>Contribute &rarr;</h2>
            <p>
              Help build the Discord framework you want to use.
            </p>
          </a>
        </div>
      </main>

    </div>
  )
}
