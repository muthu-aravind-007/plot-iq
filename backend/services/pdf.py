from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph


def generate_pdf(report: dict):

    filename = "PlotIQ_Report.pdf"

    doc = SimpleDocTemplate(filename)

    styles = getSampleStyleSheet()

    story = []

    story.append(Paragraph("<b>PlotIQ Property Report</b>", styles["Title"]))

    story.append(Paragraph("<br/>", styles["Normal"]))

    story.append(
        Paragraph(
            f"<b>Property Score:</b> {report['property_score']}",
            styles["Heading2"],
        )
    )

    story.append(
        Paragraph(
            f"<b>Grade:</b> {report['grade']}",
            styles["Normal"],
        )
    )

    story.append(
        Paragraph(
            f"<b>Terrain:</b> {report['terrain']}",
            styles["Normal"],
        )
    )

    story.append(
        Paragraph(
            f"<b>Flood Risk:</b> {report['flood_risk']}",
            styles["Normal"],
        )
    )

    story.append(
        Paragraph(
            f"<b>Utilities:</b> {report['utilities']}",
            styles["Normal"],
        )
    )

    story.append(Paragraph("<br/>", styles["Normal"]))

    story.append(
        Paragraph(
            "<b>AI Summary</b>",
            styles["Heading2"],
        )
    )

    story.append(
        Paragraph(
            report["summary"],
            styles["BodyText"],
        )
    )

    story.append(Paragraph("<br/>", styles["Normal"]))

    story.append(
        Paragraph(
            "<b>Recommendations</b>",
            styles["Heading2"],
        )
    )

    for pro in report["recommendations"]["pros"]:
        story.append(
            Paragraph(
                f"• {pro}",
                styles["BodyText"],
            )
        )

    for con in report["recommendations"]["cons"]:
        story.append(
            Paragraph(
                f"• {con}",
                styles["BodyText"],
            )
        )

    story.append(Paragraph("<br/>", styles["Normal"]))

    story.append(
        Paragraph(
            report["recommendations"]["recommendation"],
            styles["Heading3"],
        )
    )

    doc.build(story)

    return filename