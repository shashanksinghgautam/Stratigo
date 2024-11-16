import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/comps/Header"

function App() {
    return (
        <body className="dotted-background">
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Header />

                {/* header */}
                <main className="min-h-screen"> </main>
                {/* main */}

                {/* footer */}
                <footer className="bg-gradient-to-r from-[#529670] via-[#395250] to-[#915f25] py-10">
                    <div className="container mx-auto px-4 text-center text-gray-200">
                        <p>Made with <span className="text-2xl">💖</span> by ShaPaX</p>
                    </div>
                </footer>
            </ThemeProvider>
        </body>
    )
}

export default App
