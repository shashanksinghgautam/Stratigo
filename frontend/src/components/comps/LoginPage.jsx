import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogIn } from "lucide-react";

const LoginPage = () => {
    return (
        
        <Dialog>
            <DialogTrigger asChild>
                <Button size="md" className="font-bold w-30 px-4 py-2 bg-gradient-to-br
                from-blue-500 via-blue-300 to-blue-400 
                hover:scale-105 transition-transform duration-300" >
                    <LogIn className="slide-in-button" />Login
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] light-theme">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="bg-blue-700 text-white" >Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

export default LoginPage;
