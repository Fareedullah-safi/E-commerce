import connectDB from '@/Lib/DB/Db';
import Product from '@/Lib/Models/Product';
import { NextResponse } from 'next/server';

export async function DELETE(req, { params }) {
    try {
        await connectDB();
        const { id } = params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: 'Product deleted' });
    } catch (error) {
        console.error('Delete error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
