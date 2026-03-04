import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Webhook endpoint para revalidar el cache de Next.js cuando
 * se actualiza contenido en WordPress.
 *
 * Configura un webhook en WordPress que haga POST a:
 * https://tu-sitio-vercel.com/api/revalidate?secret=TU_SECRET&path=/blog
 *
 * Variables de entorno necesarias:
 * - REVALIDATION_SECRET: un string secreto para proteger el endpoint
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  // Verificar el secret
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const path = request.nextUrl.searchParams.get("path") || "/";

  try {
    revalidatePath(path);
    return NextResponse.json({
      revalidated: true,
      path,
      now: Date.now(),
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", error: String(err) },
      { status: 500 }
    );
  }
}
