import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/comps/Header"
import DefaultHome from './components/comps/DefaultHome';

function App() {
    return (
        <div className="dotted-background">
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Header />

                <main className="min-h-screen ">
                    <DefaultHome />
                </main>

                <footer className="bg-gradient-to-r from-[#1e1f33ce] via-[#3d5c4f] to-[#293252] py-5">
                    <div className="container mx-auto px-4 text-center text-gray-200">
                        <p>Made with <span className="text-2xl">💖</span> by ShaPaX</p>
                    </div>
                </footer>
            </ThemeProvider>
        </div>
    )
}

export default App
