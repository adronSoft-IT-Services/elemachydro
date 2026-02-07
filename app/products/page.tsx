"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Products() {
    const products = [
        {
            "category": "Power unit",
            "title": "HL-300",
            "image": "https://www.moris.it/wp-content/uploads/Hydraulic-unit-HL-300_03-300x169.jpg",
            "desc": "This is the HOME LIFT power unit, designed for every type of domestic lift, that combines model&apos;s comfort with submerged motor to considerable energy"
        },
        {
            "category": "Power unit",
            "title": "HL-420",
            "image": "https://www.moris.it/wp-content/uploads/Hydraulic-unit-HL-420_03-300x169.jpg",
            "desc": "This is the HOME LIFT power unit, designed for every type of domestic lift, that combines model&apos;s comfort with submerged motor to considerable energy"
        },
        {
            "category": "Power unit",
            "title": "HL-OIL-265",
            "image": "https://www.moris.it/wp-content/uploads/Hydraulic-unit-HL-OIL-265_03-300x169.jpg",
            "desc": "It is the HOME LIFT power unit for domestic lift with submerged motor, for the best comfort and noise level."
        },
        {
            "category": "Power unit",
            "title": "HL320-R-MARK2",
            "image": "https://www.moris.it/wp-content/uploads/Hydraulic-unit-HL-320R_03-300x169.jpg",
            "desc": "It is the HOME LIFT power unit for domestic lift with submerged motor, for the best comfort and noise level."
        },
        {
            "category": "Power unit",
            "title": "HL-MTW",
            "image": "https://www.moris.it/wp-content/uploads/Hydraulic-unit-HL-MTW_03-300x169.jpg",
            "desc": "It is the HOME LIFT power unit with submerged motor that allows for the reduction of the overall dimensions and, in particular, of the oil volume."
        },
        {
            "category": "Power unit",
            "title": "CM320R-MARK2",
            "image": "https://www.moris.it/wp-content/uploads/CM320R-MK2_03-1-300x169.jpg",
            "desc": "Mechanical Mechanical power unit for lifts ensures comfort and optimal silence combined with the advantages of the submerged motor."
        },
        {
            "category": "Power unit",
            "title": "CM320-MARK2",
            "image": "https://www.moris.it/wp-content/uploads/CM320-MK2_03-1-300x169.jpg",
            "desc": "Mechanical Mechanical power unit for lifts ensures comfort and optimal silence combined with the advantages of the submerged motor."
        },
        {
            "category": "Power unit",
            "title": "CM-MARK2",
            "image": "https://www.moris.it/wp-content/uploads/CM-MK2_03-3-300x169.jpg",
            "desc": "Mechanical Mechanical power unit for lifts ensures comfort and optimal silence combined with the advantages of the submerged motor."
        },
        {
            "category": "Power unit",
            "title": "CA",
            "image": "https://www.moris.it/wp-content/uploads/Hydraulic-unit-CA_03-300x169.jpg",
            "desc": "Mechanical This type of power unit represent the best solution for new installations of any medium-size and travel."
        },
        {
            "category": "Power unit",
            "title": "CA/A",
            "image": "https://www.moris.it/wp-content/uploads/Hydraulic-unit-CA-A_03-300x169.jpg",
            "desc": "Mechanical This type of power unit represent the best solution for new installations of any medium-size and travel."
        },
        {
            "category": "Power unit",
            "title": "CG",
            "image": "https://www.moris.it/wp-content/uploads/Hydraulic-unit-CG_03-300x169.jpg",
            "desc": "Mechanical The CG and CG XL mechanical power units represent the best solution for goods lifts and large installations."
        },
        {
            "category": "Power unit",
            "title": "CG XL",
            "image": "https://www.moris.it/wp-content/uploads/Hydraulic-unit-CG-XL_03-300x169.jpg",
            "desc": "Mechanical The CG and CG XL mechanical power units represent the best solution for goods lifts and large installations."
        },
        {
            "category": "Power unit",
            "title": "CIF-2",
            "image": "https://www.moris.it/wp-content/uploads/Hydraulic-unit-CIF-2_02-300x169.jpg",
            "desc": "Mechanical The CIF-2 mechanical power unit represents the best solution for new installations in compliance with the Machine Directive."
        },
        {
            "category": "Piston",
            "title": "9130",
            "image": "https://www.moris.it/wp-content/uploads/Piston-9130_01-300x169.jpg",
            "desc": "We provide a wide range of pistons to satisfy customer&apos;s requirements for all lift categories."
        },
        {
            "category": "Piston",
            "title": "9131 MCE",
            "image": "https://www.moris.it/wp-content/uploads/Piston-9131-MCE_01-300x169.jpg",
            "desc": "A model with excellent efficiency and small dimensions for HL indirect platform, complying with Machine Directive."
        },
        {
            "category": "Piston",
            "title": "9131 MCS",
            "image": "https://www.moris.it/wp-content/uploads/Piston-9131-MCS_01-300x169.jpg",
            "desc": "A model with excellent efficiency and small dimensions for HL indirect platform, complying with Machine Directive."
        },
        {
            "category": "Piston",
            "title": "9140",
            "image": "https://www.moris.it/wp-content/uploads/Piston-9140_01-300x169.jpg",
            "desc": "We provide a wide range of pistons to satisfy customer&apos;s requirements for all lift categories."
        },
        {
            "category": "Piston",
            "title": "9150",
            "image": "https://www.moris.it/wp-content/uploads/Piston-9150_01-300x169.jpg",
            "desc": "We provide a wide range of pistons to satisfy customer&apos;s requirements for all lift categories."
        },
        {
            "category": "Piston",
            "title": "HL COMPACT",
            "image": "https://www.moris.it/wp-content/uploads/Piston-HL-Compact_01-300x169.jpg",
            "desc": "This jack is designed to reduce dimensions, with minimum quantity oil requirement and reduced weight."
        },
        {
            "category": "Machineroomless cabinets",
            "title": "HL-300",
            "image": "https://www.moris.it/wp-content/uploads/ARM-HL300-420-265-OIL-300x200.jpg",
            "desc": "Elemac Hydro Solutions has a range of lifting platform cabinets, made of plastic-coated steel, with a reduced size that can be placed in any environment."
        },
        {
            "category": "Machineroomless cabinets",
            "title": "HL-420",
            "image": "https://www.moris.it/wp-content/uploads/ARM-HL300-420-265-OIL-300x200.jpg",
            "desc": "Elemac Hydro Solutions has a range of lifting platform cabinets, made of plastic-coated steel, with a reduced size that can be placed in any environment."
        },
        {
            "category": "Machineroomless cabinets",
            "title": "HL-OIL-265",
            "image": "https://www.moris.it/wp-content/uploads/ARM-HL300-420-265-OIL-300x200.jpg",
            "desc": "Elemac Hydro Solutions has a range of lifting platform cabinets, made of plastic-coated steel, with a reduced size that can be placed in any environment."
        },
        {
            "category": "Machineroomless cabinets",
            "title": "HL320-R-MARK2",
            "image": "https://www.moris.it/wp-content/uploads/ARM-CM320R-MK2-300x200.jpg",
            "desc": "Elemac Hydro Solutions has a range of lifting platform cabinets, made of plastic-coated steel, with a reduced size that can be placed in any environment."
        },
        {
            "category": "Machineroomless cabinets",
            "title": "CM320R-MARK2",
            "image": "https://www.moris.it/wp-content/uploads/ARM-CM320R-MK2-300x200.jpg",
            "desc": "Elemac Hydro Solutions offers a series of different size cabinets in compliance with the EN 81.20: 2014, EN 81.50: 2014 or Machine Directive."
        },
        {
            "category": "Machineroomless cabinets",
            "title": "CM320-MARK2",
            "image": "https://www.moris.it/wp-content/uploads/ARM-CM-MK2-300x200.jpg",
            "desc": "Elemac Hydro Solutions offers a series of different size cabinets in compliance with the EN 81.20: 2014, EN 81.50: 2014 or Machine Directive."
        },
        {
            "category": "Machineroomless cabinets",
            "title": "CM-MARK2",
            "image": "https://www.moris.it/wp-content/uploads/ARM-CM-MK2-300x200.jpg",
            "desc": "Elemac Hydro Solutions offers a series of different size cabinets in compliance with the EN 81.20: 2014, EN 81.50: 2014 or Machine Directive."
        },
        {
            "category": "Machineroomless cabinets",
            "title": "CA",
            "image": "https://www.moris.it/wp-content/uploads/ARM-CM-MK2-300x200.jpg",
            "desc": "Elemac Hydro Solutions offers a series of different size cabinets in compliance with the EN 81.20: 2014, EN 81.50: 2014 or Machine Directive."
        },
        {
            "category": "Rupture valve",
            "title": "3/4&quot; HP",
            "image": "https://www.moris.it/wp-content/uploads/Valvola-paracadute-Porture-valve-300x200.jpg",
            "desc": "They are supplied with a CE certificate in compliance with the Lift Directive. It is a safety device which operates when the downward speed increases excessively."
        },
        {
            "category": "Rupture valve",
            "title": "1&quot;",
            "image": "https://www.moris.it/wp-content/uploads/Valvola-paracadute-Porture-valve-300x200.jpg",
            "desc": "They are supplied with a CE certificate in compliance with the Lift Directive. It is a safety device which operates when the downward speed increases excessively."
        },
        {
            "category": "Rupture valve",
            "title": "1&quot;1/4",
            "image": "https://www.moris.it/wp-content/uploads/Valvola-paracadute-Porture-valve-300x200.jpg",
            "desc": "They are supplied with a CE certificate in compliance with the Lift Directive. It is a safety device which operates when the downward speed increases excessively."
        },
        {
            "category": "Rupture valve",
            "title": "1&quot;1/2",
            "image": "https://www.moris.it/wp-content/uploads/Valvola-paracadute-Porture-valve-300x200.jpg",
            "desc": "They are supplied with a CE certificate in compliance with the Lift Directive. It is a safety device which operates when the downward speed increases excessively."
        },
        {
            "category": "Rupture valve",
            "title": "2&quot;",
            "image": "https://www.moris.it/wp-content/uploads/Rupture-valve-2-inc_01-300x169.jpg",
            "desc": "They are supplied with a CE certificate in compliance with the Lift Directive. It is a safety device which operates when the downward speed increases excessively."
        },
        {
            "category": "Uncontrolled movement device",
            "title": "KMI",
            "image": "https://www.moris.it/wp-content/uploads/KMI-color-01-300x200.jpg",
            "desc": "The machine directive 2006/42/CE has introduced safety requirements that also impact on homelifts/platforms for transport of people. KMI is the new device for uncontrolled movement. Certified IMQ."
        },
        {
            "category": "Uncontrolled movement device",
            "title": "HM-SV",
            "image": "https://www.moris.it/wp-content/uploads/HM-SV-color-01-300x200.jpg",
            "desc": "The machine directive 2006/42/CE has introduced safety requirements that also impact on homelifts/platforms for transport of people. HM-SV is the device for uncontrolled movement."
        },
        {
            "category": "Uncontrolled movement device",
            "title": "HSV",
            "image": "https://www.moris.it/wp-content/uploads/HSV_nuovo_color-01-1-300x200.jpg",
            "desc": "The machine directive 2006/42/CE has introduced safety requirements that also impact on homelifts/platforms for transport of people. HSV is the device for uncontrolled movement."
        },
        {
            "category": "VEM - Moris Electronic Valve",
            "title": "VEM – Moris Electronic Valve",
            "image": "https://www.moris.it/wp-content/uploads/ValvolaDX-262x180-grigio-300x206.jpg",
            "desc": "VEM250 assures comfort in every condition and allows cost and energy saving."
        },
        {
            "category": "Platform lift",
            "title": "MyLift",
            "image": "https://www.moris.it/wp-content/uploads/product-mylift-no-shadow-300x186.jpg",
            "desc": "MyLift is the highly customizable certified lifting platform, available in a man-present or automatic version."
        },
        {
            "category": "EN81.21 Lift",
            "title": "SM2.1",
            "image": "https://www.moris.it/wp-content/uploads/product-sm-2-1-no-shadow-300x186.jpg",
            "desc": "SM 2.1 is our special hydraulic lift with low pit and headroom which is adaptable to existing shaft."
        },
        {
            "category": "Shaft kit",
            "title": "Brackets",
            "image": "https://www.moris.it/wp-content/uploads/Staffe-Shaft-kit-300x200.jpg",
            "desc": "A selection of brackets for standard plants, are always available in our stock, integrated with screws, dowels and keys."
        },
        {
            "category": "Shaft kit",
            "title": "Guide rails",
            "image": "https://www.moris.it/wp-content/uploads/guide-300x200.jpg",
            "desc": "MORIS offers a wide selection of guide rails type standard cold- with application until 2 m/s."
        },
        {
            "category": "Car frame",
            "title": "Car frames",
            "image": "https://www.moris.it/wp-content/uploads/Arcate-Car-frames-300x200.jpg",
            "desc": "Elemac Hydro Solutions offers a wide range of car frames for hydraulic lifts: direct acting, indirect acting and rucksack."
        }
    ];

    // Group products by category
    const categories = Array.from(new Set(products.map(p => p.category)));

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <h1 className="page-title">Our Product Range</h1>
                    <p className="page-subtitle">Authorized distributor of premium Moris hydraulic components and lift solutions.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {categories.map((category) => (
                        <div key={category} id={category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')} className="category-section">
                            <h2 className="category-title">{category}</h2>
                            <div className="products-grid">
                                {products.filter(p => p.category === category).map((product, index) => (
                                    <div key={index} className="product-card">
                                        <div className="product-image-wrapper">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                width={300}
                                                height={200}
                                                className="product-img"
                                            />
                                        </div>
                                        <div className="product-content">
                                            <h3 className="product-title">{product.title}</h3>
                                            <p className="product-desc">{product.desc}</p>
                                            <Link href="/contact" className="btn-link">
                                                Enquire Now <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
        .page-hero {
            background-color: var(--secondary-color);
            color: white;
            padding: 80px 0;
            text-align: center;
            position: relative;
            background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1625345781358-690c5c643926?auto=format&fit=crop&w=1600&q=80');
            background-size: cover;
            background-position: center;
        }
        .page-title { 
            font-size: 3rem; 
            margin-bottom: 15px; 
            font-weight: 800;
        }
        .page-subtitle { 
            font-size: 1.2rem;
            opacity: 0.9; 
            max-width: 600px;
            margin: 0 auto;
        }
        
        .section {
            padding: 80px 0;
        }

        .category-section {
            margin-bottom: 80px;
        }
        
        .category-title {
            font-size: 2rem;
            color: var(--secondary-color);
            margin-bottom: 40px;
            padding-bottom: 10px;
            border-bottom: 2px solid #eee;
            position: relative;
        }
        .category-title::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 80px;
            height: 2px;
            background: var(--primary-color);
        }
        
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .product-card {
            background: white;
            border-radius: var(--radius);
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            overflow: hidden;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            border: 1px solid #f0f0f0;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border-color: var(--primary-color);
        }
        
        .product-image-wrapper {
            overflow: hidden;
            height: 220px;
        }
        
        .product-image {
            height: 100%;
            width: 100%;
            background-size: cover;
            background-position: center;
            transition: transform 0.5s;
        }
        .product-card:hover .product-image {
            transform: scale(1.1);
        }
        
        .product-content {
            padding: 25px;
            flex: 1;
            display: flex;
            flex-direction: column;
            background: white;
        }
        
        .product-title {
            font-size: 1.25rem;
            color: var(--secondary-color);
            margin-bottom: 10px;
            font-weight: 700;
        }
        
        .product-desc {
            color: var(--text-light);
            line-height: 1.5;
            margin-bottom: 20px;
            flex-grow: 1;
            font-size: 0.9rem;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
        
        .btn-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--primary-color);
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.85rem;
            letter-spacing: 0.5px;
            transition: 0.2s;
            margin-top: auto;
        }
        .btn-link:hover {
            gap: 12px;
            color: var(--secondary-color);
        }
        
        @media (max-width: 768px) {
            .products-grid {
                grid-template-columns: 1fr;
            }
            .page-title { font-size: 2.2rem; }
            .category-title { font-size: 1.8rem; }
        }
      `}</style>
        </>
    );
}
