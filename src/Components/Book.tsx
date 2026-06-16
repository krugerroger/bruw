import { Calendar } from "lucide-react";
import Link from "next/link";

export function Booker(){


    return(
        <div>
            <Link 
              href="/reservation" 
              className="btn btn-primary bg-yellow-600 hover:bg-yellow-700 border-none text-white text-lg px-8 py-6 rounded shadow-lg"
            >
              <Calendar className="inline-block mr-2" size={20} />
              <span
                className="block"
              >
                Réserver maintenant
              </span>
            </Link>
        </div>
    );
}